// My Solution (do not pass secret test #8)
function executeCommands(commands) {
  const reg = [0, 0, 0, 0, 0, 0, 0, 0]

  const getInt = (arg) => {
    if (arg === undefined) {
      return undefined
    }
    if (arg.startsWith('V')) {
      return parseInt(arg.slice(-1))
    } else {
      return parseInt(arg, 10)
    }
  }

  let pointer = 0
  while (pointer < commands.length) {
    const command = commands[pointer]
    const [instruction, args] = command.split(' ')
    const [arg1, arg2] = args.split(',')
    const i1 = getInt(arg1)
    const i2 = getInt(arg2)

    switch (instruction) {
      case 'MOV':
        if (arg1.startsWith('V') && arg2.startsWith('V')) {
          reg[i2] = reg[i1]
        } else {
          reg[i2] = i1
        }
        break
      case 'ADD':
        reg[i1] += reg[i2]
        reg[i1] %= 256
        break
      case 'DEC':
        if (reg[i1] === 0) {
          reg[i1] = 255
        } else {
          reg[i1] -= 1
        }
        break
      case 'INC':
        if (reg[i1] === 255) {
          reg[i1] = 0
        } else {
          reg[i1] += 1
        }
        break
      case 'JMP':
        if (reg[0] !== 0) {
          pointer = i1 - 1
        }
        break
      // default:
      //   throw new Error(`Unknown instruction: ${instruction}`)
    }
    pointer += 1
  }

  return reg
}

// Another solution (10pts)
/*
function executeCommands(commands) {
  let commandLine = 0
  const BASE = 256
  const CPU = { V00: 0, V01: 0, V02: 0, V03: 0, V04: 0, V05: 0, V06: 0, V07: 0 }
  const ACTIONS = {
    MOV: (value1, value2) => {
      value1.startsWith('V')
        ? (CPU[value2] = CPU[value1])
        : (CPU[value2] = +value1)
    },
    ADD: (value1, value2) => {
      CPU[value1] = (CPU[value1] + CPU[value2]) % BASE
    },
    DEC: (value) => {
      CPU[value] = (--CPU[value] + BASE) % BASE
    },
    INC: (value) => {
      CPU[value] = ++CPU[value] % BASE
    },
    JMP: (toCommandLine) => {
      if (CPU['V00'] > 0) commandLine = +toCommandLine
    }
  }
  while (commandLine < commands.length) {
    let [action, payload] = commands[commandLine].split(' ')
    let values = [...payload.split(',')].map((v) =>
      v.startsWith('V') ? 'V0' + (+v.replace(/V\d/, '') % 8) : v
    )
    commandLine++
    ACTIONS[action](...values)
  }
  return [...Object.values(CPU)]
}
*/

/*
function executeCommands(commands) {
  const memory = {
    V00: 0, V01: 0, V02: 0, V03: 0, V04: 0, V05: 0, V06: 0, V07: 0
  };
  let ptr = 0;

  const commandsCB = {
    'MOV': (args) => {
      memory[args[1]] = (Number.isNaN(Number(args[0])))
        ? memory[args[0]]
        : Number(args[0]);
      ptr++;
    },
    'DEC': (args) => {
      memory[args[0]]--;
      (memory[args[0]] < 0) && (memory[args[0]] += 256);
      ptr++;
    },
    'INC': (args) => {
      memory[args[0]]++;
      (memory[args[0]] > 255) && (memory[args[0]] %= 256);
      ptr++;
    },
    'ADD': (args) => {
      memory[args[0]] += memory[args[1]];
      memory[args[0]] %= 256;
      ptr++;
    },
    'JMP': (args) => {
      ptr = ((memory['V00'] !== 0) ? Number(args[0]) : ptr + 1);
    }
  };

  while (ptr != commands.length) {
    const [cmd, args] = commands[ptr].split(' ');
    commandsCB[cmd](args.split(',').map(arg => {
      return arg.startsWith("V")
        ? "V0"+ (+arg.replace(/V\d/, '') % 8)
        : arg
    }));
  }

  return Object.values(memory);
}
*/
module.exports = executeCommands
