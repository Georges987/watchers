<template>
    <div class="tty-container">
      <div class="tty-header">
        <span class="circle red"></span>
        <span class="circle yellow"></span>
        <span class="circle green"></span>
      </div>
      <div class="tty-body">
        <div v-for="(line, index) in output" :key="index" class="tty-line">
          <span>{{ line }}</span>
        </div>
        <form @submit.prevent="handleCommand">
          <span class="tty-prompt">$</span>
          <input
            v-model="input"
            class="tty-input"
            type="text"
            placeholder="Enter command..."
            autofocus
          />
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const input = ref('');
  const output = ref([
    'Welcome to TTY!',
    'Type "help" for a list of commands.',
  ]);
  
  const handleCommand = () => {
    const command = input.value.trim();
    if (command) {
      if (command === 'help') {
        output.value.push('Available commands: help, clear');
      } else if (command === 'clear') {
        output.value = [];
      } else {
        output.value.push(`Unknown command: ${command}`);
      }
    }
    input.value = '';
  };
  </script>
  
  <style scoped>
  .tty-container {
    background: #1e1e1e;
    color: #f8f8f2;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 8px;
    padding: 1rem;
    max-width: 600px;
    margin: 1rem auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .tty-header {
    display: flex;
    justify-content: flex-start;
    padding: 0.5rem;
    background: #2c2c2c;
    border-radius: 6px 6px 0 0;
  }
  
  .circle {
    height: 12px;
    width: 12px;
    margin: 0 4px;
    border-radius: 50%;
  }
  
  .red {
    background: #ff5f56;
  }
  
  .yellow {
    background: #ffbd2e;
  }
  
  .green {
    background: #27c93f;
  }
  
  .tty-body {
    padding: 1rem;
  }
  
  .tty-line {
    margin: 0.2rem 0;
  }
  
  .tty-prompt {
    color: #50fa7b;
  }
  
  .tty-input {
    background: none;
    border: none;
    color: #f8f8f2;
    outline: none;
    width: calc(100% - 1rem);
  }
  </style>
  