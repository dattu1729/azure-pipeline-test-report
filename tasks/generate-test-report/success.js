"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let tmrm = require("azure-pipelines-task-lib/mock-run");
let path = require("path");

  let taskPath = path.join(__dirname, '.', 'index.js');
  let tmr = new tmrm.TaskMockRunner(taskPath);
  tmr.setInput('reqIds', '10,20');
  tmr.run();

