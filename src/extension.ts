
import * as vscode from 'vscode';
import ScssFormat from './ScssFormat';

export class App {
	static getText() {
		var editor = vscode.window.activeTextEditor;
		if (!editor) {
			return "";
		}
		var selection = editor.selection;
		return editor.document.getText(selection);
	}
	static format() {
		var editor = vscode.window.activeTextEditor;
		if (!editor) {
			return "";
		}
		var selection = editor.selection;
		var text = editor.document.getText(selection);

		// var text = this.getText();
		// if(!text) {
		// 	return;
		// }

		text = new ScssFormat().formatText(text);
		// var code = text;
		// code=code.replace(/(\n|\t|\s)*/ig,'$1');
		// code=code.replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig,'$1');
		// code=code.replace(/(\{|\}|\,|\:|\;)\s/ig,'$1');
		
		// code=code.replace(/(\})/ig,'$1\n');
		// code=code.replace(/(\*\/)/ig,'$1\n');

		// var singleLine = code;
	
		var editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}
		editor.edit((editBuilder) => {
			editBuilder.replace(selection, text);
			// vscode.window.showInformationMessage('css格式化多行成功');
		});
	}
}

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.scssFormat', () => {
		App.format();
		// vscode.window.showInformationMessage('Hello World from scssFormat!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
