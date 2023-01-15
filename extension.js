const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  vscode.window.showInformationMessage(
    'Congratulations, your extension "npmMate" is now active!'
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("npmmate.helloWorld", function () {
      vscode.window.showInformationMessage("Hello World from npmMate!");
    })
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
