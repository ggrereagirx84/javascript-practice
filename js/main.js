'use strict' 
{
  const header = ['========================', '現在持っているのタスク一覧', '========================'];
  const task = ['掃除', '買い物', '散歩'];

  function showTask() {
    for (let i = 0; i < header.length; i++) {
      console.log(header[i]);
    }
    for (let i = 0; i < task.length; i++) {
      console.log(`${i} : ${task[i]}`);
    }
  }

  showTask();

  let result = prompt('タスクを入力してください')
  task.push(result);
  
  alert('新しいタスクを追加しました');

  showTask();

  prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');

}