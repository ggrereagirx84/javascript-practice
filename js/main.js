'use strict' 
{
  const header = ['========================', '現在持っているのタスク一覧', '========================'];
  const tasks = [
    {content: '机を片付ける', genre: '掃除'},
    {content: '牛乳を買う', genre: '買い物'},
    {content: '散歩する', genre: '運動'},
  ];

  function showTask() {
    header.forEach(element => console.log(element));
    tasks.forEach((task, index) => {
      console.log(`${index} ： [内容]${task.content}、[ジャンル]${task.genre}`)
    });
  }

  showTask();

  const newContent = prompt('タスクを入力してください')
  const newGenre = prompt('ジャンルを入力してください')

  tasks.push({content: newContent, genre: newGenre});
  
  alert('新しいタスクを追加しました');

  showTask();

  prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');

}