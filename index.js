#!/usr/bin/env node

import {DiagnosticSeverity, TextDocuments, createConnection} from "vscode-languageserver";

import blacklist from "./badWords.js";

function getBlacklisted(text) {
  const regex = new RegExp(`\\b(${blacklist.join("|")})\\b`, "gi");

  const results = [];
  regex.lastIndex = 0;

  while ((matches = regex.exec(text)) && results.length < 100) {
    results.push({
      value: matches[0],
      index: matches.index,
    });
  }

  return results;
}

const blacklistToDiagnostic =
  (textDocument) =>
  ({ index, value }) => ({
    severity: DiagnosticSeverity.Warning,
    range: {
      start: textDocument.positionAt(index),
      end: textDocument.positionAt(index + value.length),
    },
    message: `${value} is a bad word!`,
    source: "Bad Words Linter",
  });

const getDiagnostics = (textDocument) =>
  getBlacklisted(textDocument.getText()).map(
    blacklistToDiagnostic(textDocument)
  );

const connection = createConnection();
const documents = new TextDocuments();

connection.onInitialize(() => ({
  capabilities: {
    textDocumentSync: documents.syncKind,
  },
}));

documents.onDidChangeContent((change) => {
  connection.sendDiagnostics({
    uri: change.document.uri,
    diagnostics: getDiagnostics(change.document),
  });
});

documents.listen(connection);
connection.listen();
