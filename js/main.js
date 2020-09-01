'use strict' 
{
  const header = ['========================', '現在持っているのタスク一覧', '========================'];
  const tasks = ['掃除', '買い物', '散歩'];

  function showTask() {
    header.forEach(element => console.log(element));
    tasks.forEach(task => console.log(task));
  }

  showTask();

  tasks.push(prompt('タスクを入力してください'));
  
  alert('新しいタスクを追加しました');

  showTask();

  prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');

}