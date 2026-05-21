// Lambda Driver
// Copyright 2019 Noesis Labs

System.Print("Lambda: Initializing Lambda Driver\r\n");
const g_debug = Config.Get("DebugTrace") == "true";
let g_lambda_contexts: LambdaContext[];

function init(): void {
	SystemVars.OnSysVarChangeFunc = onSysVarChange;

	const lambda_count = parseInt(Config.Get("LAMBDA_COUNT"), 10);
	g_lambda_contexts = new Array<LambdaContext>(lambda_count);

	const subscribedInputIds = new Array();

	for (let lambdaIndex = 0; lambdaIndex < lambda_count; lambdaIndex++) {
		dbg('Processing lambdaIndex', lambdaIndex);
		const inputCount = parseInt(Config.Get("INPUT_COUNT_" + (lambdaIndex + 1)), 10);
		dbg('Processing ' + inputCount + ' inputs for lambda ' + (lambdaIndex + 1));
		const inputIds = new Array();
		for (let i = 0; i < inputCount; i++) {
			dbg('Processing input ' + (i + 1) + ' for lambda ' + (lambdaIndex + 1));

			switch (parseInt(Config.Get('INPUT_' + (i + 1) + '_TYPE_' + (lambdaIndex + 1)), 10)) {
				case 1:
					inputIds[i] = parseInt(Config.Get('INPUT_' + (i + 1) + '_BOOL_' + (lambdaIndex + 1)), 10);
					break;
				case 2:
					inputIds[i] = parseInt(Config.Get('INPUT_' + (i + 1) + '_INT_' + (lambdaIndex + 1)), 10);
					break;
				case 3:
					inputIds[i] = parseInt(Config.Get('INPUT_' + (i + 1) + '_STRING_' + (lambdaIndex + 1)), 10);
					break;
			}

			dbg('Checking subscription', inputIds[i]);
			if (subscribedInputIds.indexOf(inputIds[i]) < 0) {
				dbg('Adding subscription', inputIds[i]);
				SystemVars.AddSubscription(inputIds[i]);
				subscribedInputIds.push(inputIds[i]);
			}
		}

		g_lambda_contexts[lambdaIndex] = {
			expression: Config.Get("EXPRESSION_" + (lambdaIndex + 1)),
			index: lambdaIndex + 1,
			inputCount: inputCount,
			inputIds: inputIds,
			lastResult: null,
			resultType: parseInt(Config.Get("RESULT_TYPE_" + (lambdaIndex + 1)), 10),
			useAutoEval: Config.Get("USE_AUTO_EVAL_" + (lambdaIndex + 1)) == 'true',
		}

		evaluate(g_lambda_contexts[lambdaIndex]);
	}
}

function evaluateIndex(lambdaContextIndex: number): void {
	evaluate(g_lambda_contexts[lambdaContextIndex - 1]);
}

function evaluate(lambdaContext: LambdaContext): void {
	try {
		let x1: any;
		let x2: any;
		let x3: any;
		let x4: any;
		let x5: any;
		let x6: any;
		let x7: any;
		let x8: any;
		let x9: any;
		let x10: any;
		let x11: any;
		let x12: any;
		let x13: any;
		let x14: any;
		let x15: any;
		let x16: any;
		let x17: any;
		let x18: any;
		let x19: any;
		let x20: any;
		if (lambdaContext.inputCount > 0) { x1 = SystemVars.Read(lambdaContext.inputIds[0]); }
		if (lambdaContext.inputCount > 1) { x2 = SystemVars.Read(lambdaContext.inputIds[1]); }
		if (lambdaContext.inputCount > 2) { x3 = SystemVars.Read(lambdaContext.inputIds[2]); }
		if (lambdaContext.inputCount > 3) { x4 = SystemVars.Read(lambdaContext.inputIds[3]); }
		if (lambdaContext.inputCount > 4) { x5 = SystemVars.Read(lambdaContext.inputIds[4]); }
		if (lambdaContext.inputCount > 5) { x6 = SystemVars.Read(lambdaContext.inputIds[5]); }
		if (lambdaContext.inputCount > 6) { x7 = SystemVars.Read(lambdaContext.inputIds[6]); }
		if (lambdaContext.inputCount > 7) { x8 = SystemVars.Read(lambdaContext.inputIds[7]); }
		if (lambdaContext.inputCount > 8) { x9 = SystemVars.Read(lambdaContext.inputIds[8]); }
		if (lambdaContext.inputCount > 9) { x10 = SystemVars.Read(lambdaContext.inputIds[9]); }
		if (lambdaContext.inputCount > 10) { x11 = SystemVars.Read(lambdaContext.inputIds[10]); }
		if (lambdaContext.inputCount > 11) { x12 = SystemVars.Read(lambdaContext.inputIds[11]); }
		if (lambdaContext.inputCount > 12) { x13 = SystemVars.Read(lambdaContext.inputIds[12]); }
		if (lambdaContext.inputCount > 13) { x14 = SystemVars.Read(lambdaContext.inputIds[13]); }
		if (lambdaContext.inputCount > 14) { x15 = SystemVars.Read(lambdaContext.inputIds[14]); }
		if (lambdaContext.inputCount > 15) { x16 = SystemVars.Read(lambdaContext.inputIds[15]); }
		if (lambdaContext.inputCount > 16) { x17 = SystemVars.Read(lambdaContext.inputIds[16]); }
		if (lambdaContext.inputCount > 17) { x18 = SystemVars.Read(lambdaContext.inputIds[17]); }
		if (lambdaContext.inputCount > 18) { x19 = SystemVars.Read(lambdaContext.inputIds[18]); }
		if (lambdaContext.inputCount > 19) { x20 = SystemVars.Read(lambdaContext.inputIds[19]); }

		const f = new Function(
			'x1',
			'x2',
			'x3',
			'x4',
			'x5',
			'x6',
			'x7',
			'x8',
			'x9',
			'x10',
			'x11',
			'x12',
			'x13',
			'x14',
			'x15',
			'x16',
			'x17',
			'x18',
			'x19',
			'x20',
			'prevResult',
			'JSON',
			lambdaContext.expression
		);

		const result = f(
			x1,
			x2,
			x3,
			x4,
			x5,
			x6,
			x7,
			x8,
			x9,
			x10,
			x11,
			x12,
			x13,
			x14,
			x15,
			x16,
			x17,
			x18,
			x19,
			x20,
			lambdaContext.lastResult,
			JSON
		);

		dbg('Lambda ' + lambdaContext.index + ' Evaluated to', result);

		if (lambdaContext.lastResult != result) {
			lambdaContext.lastResult = result;

			dbg('Lambda ' + lambdaContext.index + ' variable updating to', result);

			switch (lambdaContext.resultType) {
				case 1:
					SystemVars.Write('RESULT_BOOL_' + lambdaContext.index, result, "BOOLEAN");
					break;
				case 2:
					SystemVars.Write('RESULT_INT_' + lambdaContext.index, result);
					break;
				case 3:
					SystemVars.Write('RESULT_STRING_' + lambdaContext.index, result);
					break;
				case 4:
					SystemVars.Write('RESULT_IMAGE_' + lambdaContext.index, result, "IMGURL");
					break;
				case 5:
					if (!(result instanceof Array)) { throw "Result [" + result + "] is not an array."; }
					const list = new SystemVarsList('RESULT_LIST_' + lambdaContext.index);
					list.Open();
					for (let i = 0; i < result.length; i++) {
						list.Insert(result[i]);
					}
					list.Close();
					break;
			}

			System.SignalEvent('RESULT_CHANGED_' + lambdaContext.index);

			dbg('Lambda ' + lambdaContext.index + ' variable updated to', result);
		}
	} catch (error : unknown) {
		dbg('ERROR_' + lambdaContext.index, error);
		SystemVars.Write('ERROR_' + lambdaContext.index, error);
	}
}

function onSysVarChange(sysVarId: number): void {
	dbg('onSysVarChange: ' + sysVarId);

	for (let i = 0; i < g_lambda_contexts.length; i++) {
		if (g_lambda_contexts[i].useAutoEval && g_lambda_contexts[i].inputIds.indexOf(sysVarId) >= 0) {
			evaluate(g_lambda_contexts[i]);
		}
	}
}

function dbg(msg: string, val: unknown = undefined): void {
	if (g_debug) {
		if (val === undefined) {
			System.Print('Lambda: ' + msg);
		}
		else if (val === Object(val)) {
			System.Print('Lambda: ' + msg + ': ' + val?.toString())
		}
		else {
			System.Print('Lambda: ' + msg + ': ' + val);
		}
	}
}

init();
