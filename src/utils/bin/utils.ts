import packageJson from '../../../package.json';
import * as bin from './index';

export const h = async (args: string[]): Promise<string> => {  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.

+---------------------+      +---------------------+      +-----------------------+
|    'resume' / 'r'   |      |       Socials       |      |       Try These       |
+---------------------+      +----------+----------+      +-----------------------+
|  'projects' / 'p'   |      |  Twitter | 'twitter'|      |         'time'        |
+---------------------+      +----------+----------+      +-----------------------+
|      'Reading'      |      |  Youtube | 'youtube'|      |         'see'         |
+---------------------+      +----------+----------+      +-----------------------+
|    'about' / 'a'    |      |   Email  |  'email' |      |         'date'        |
+---------------------+      +----------+----------+      +-----------------------+
|    'banner' / 'b'   |      | Bilibili |'bilibili'|      |         'what'        |
+---------------------+      +----------+----------+      +-----------------------+
|        'gui'        |                                   |     'theme random'    |          
+---------------------+                                   +-----------------------+
|       'help'        |                                   |        'liyong'       |     
+---------------------+                                   +-----------------------+
|      'cowsay'       |                                   |        'weather'      |
+---------------------+                                   +-----------------------+   
`;
};

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.

+---------------------+      +---------------------+      +-----------------------+
|    'resume' / 'r'   |      |       Socials       |      |       Try These       |
+---------------------+      +----------+----------+      +-----------------------+
|  'projects' / 'p'   |      |  Twitter | 'twitter'|      |         'time'        |
+---------------------+      +----------+----------+      +-----------------------+
| 'experiences' / 'e' |      |  Youtube | 'youtube'|      |         'see'         |
+---------------------+      +----------+----------+      +-----------------------+
|    'about' / 'a'    |      |   Email  |  'email' |      |         'date'        |
+---------------------+      +----------+----------+      +-----------------------+
|    'banner' / 'b'   |      | Bilibili |'bilibili'|      |         'what'        |
+---------------------+      +----------+----------+      +-----------------------+
|        'gui'        |                                   |     'theme random'    |          
+---------------------+                                   +-----------------------+
|       'help'        |                                   |        'liyong'       |     
+---------------------+                                   +-----------------------+
|      'cowsay'       |                                   |        'weather'      |
+---------------------+                                   +-----------------------+                                                   
`;
};

export const wtf = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const see = async (args: string[]): Promise<string> => {
  return `
--------------------------------------------------------------
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
--------------------------------------------------------------
`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  // window.open('https://liyong.online', '_self'); // TODO: Add personal url
  window.open('https://liyong.online', '_self'); // TODO: Add personal url

  return 'Opening GUI version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:nicedaytoooyou@gmail.com');

  return 'Opening mailto:nicedaytoooyou@gmail.com';
};

export const what = async (args?: string[]): Promise<string> => {
  return `芭比q yygq 人生无常，大肠包小肠 2333 瑞思拜 栓Q 针不戳 我真的会谢 AWSL 不明觉厉 PUA YYDS 躺平 绝绝子 干饭人 凡尔赛 EMO 元宇宙 
中国人不骗中国人 奥利给 打工人 不忘初心 我太难了 我不要你觉得，我要我觉得 杠精 贫穷限制了我的想象力 一个亿小目标 WTF`;
};

export const liyong = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.liyong.online');
  }, 1000);

  return `欢迎访问Li Yong的网页 '${args[0]}' thank you for reading.`;
};

export const time = async (args?: string[]): Promise<string> => {
  return `
----------------------------------------------------------------------------------------------------------------------
███████╗███╗   ██╗     ██╗ ██████╗ ██╗   ██╗    ██╗   ██╗ ██████╗ ██╗   ██╗██████╗     ████████╗██╗███╗   ███╗███████╗
██╔════╝████╗  ██║     ██║██╔═══██╗╚██╗ ██╔╝    ╚██╗ ██╔╝██╔═══██╗██║   ██║██╔══██╗    ╚══██╔══╝██║████╗ ████║██╔════╝
█████╗  ██╔██╗ ██║     ██║██║   ██║ ╚████╔╝      ╚████╔╝ ██║   ██║██║   ██║██████╔╝       ██║   ██║██╔████╔██║█████╗  
██╔══╝  ██║╚██╗██║██   ██║██║   ██║  ╚██╔╝        ╚██╔╝  ██║   ██║██║   ██║██╔══██╗       ██║   ██║██║╚██╔╝██║██╔══╝  
███████╗██║ ╚████║╚█████╔╝╚██████╔╝   ██║          ██║   ╚██████╔╝╚██████╔╝██║  ██║       ██║   ██║██║ ╚═╝ ██║███████╗
╚══════╝╚═╝  ╚═══╝ ╚════╝  ╚═════╝    ╚═╝          ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═╝       ╚═╝   ╚═╝╚═╝     ╚═╝╚══════╝
----------------------------------------------------------------------------------------------------------------------
`;
};

export const Reading = async (args?: string[]): Promise<string> => {
  return `
┌──────────────────────────────────────────────────────────────┐
│ 央视新闻《夜读》整编 / Compilation of CCTV News' Night Reading │
└──────────────────────────────────────────────────────────────┘
• 遇见更加成熟、睿智的自己，从来不是一蹴而就的。我们总是在反反复复地摔倒、站起间，慢慢领受生活赐予的智慧。用时间去体验，用磨砺去累积，每个人都可以成为对生活有独到见解的人。
• Meeting a more mature and wise self is never achieved overnight. We always fall and stand up repeatedly, slowly receiving the wisdom bestowed by life. By using time to experience and honed to accumulate, everyone can become someone with unique insights into life.


┌────────────────────────────────────────────────────────────────┐
│ 享受过程，释怀结果 / Enjoy the process and let go of the results │
└────────────────────────────────────────────────────────────────┘
• 人们常被某种执念绑缚：似乎一切问题总有完美解，没有找到，只因努力得还不够。我们疏忽了这一事实：很多时候，答案不是唯一的、绝对的，而是要基于不同视角和不同阶段的认知，做出明智的选择。比起对结果的较真，更能带给人成长的，是尝试、探索和经历本身。
• People are often bound by a certain obsession: it seems that there is always a perfect solution to all problems, not found, just because the effort is not enough. We overlook the fact that many times, the answer is not unique or absolute, but rather requires making wise choices based on different perspectives and stages of cognition. What can bring more growth to people than taking the results seriously is the trial, exploration, and experience itself.


┌─────────────────────────────────────────────────────────────────────────┐
│ 情绪稳定才能解决问题 / Emotional stability is the key to solving problems │
└─────────────────────────────────────────────────────────────────────────┘
• 不良情绪，不能解决问题，反而能制造更多问题。建立稳定的情绪内核，遇事不乱阵脚，才能找到高效化解问题的方法。要多提醒自己：不带怒气处事，不带怨气表态，不带急性办事。难题面前，不急不躁，从容应对。
• Bad emotions cannot solve problems, but can create more problems. Only by establishing a stable emotional core and staying calm can we find efficient solutions to problems. Remind yourself more: handle things without anger, express oneself without resentment, and handle things without impatience. In the face of difficult problems, don't be impatient or impatient, and handle them calmly.


┌──────────────────────────────────────────┐
│ 不要妄下判断 / Don't make hasty judgments │
└──────────────────────────────────────────┘
• 有的人习惯站在某些立场，以主观感受或道听途说，来随意评价。但事情并非眼见为实，那些自以为是的武断执言，何尝不是另一种形式的作恶。不轻易评论和指责，是对人对己的尊重。如果做不到，沉默和思考就是最好的选择
• Some people tend to stand in certain positions and make arbitrary evaluations based on subjective feelings or hearsay. But seeing is not believing, and those self righteous and arbitrary assertions are just another form of wrongdoing. Not easily commenting and criticizing is respect for others and oneself. If it cannot be done, silence and reflection are the best choices.


┌─────────────────────────────────────────────────────────────────────────────┐
│ 优秀的品性比大脑更重要 / Excellent character is more important than the brain │
└─────────────────────────────────────────────────────────────────────────────┘
• 品性体现着人的价值观、思维方式。一个人的知识再丰厚，如若失去良好品行的规引，难有可持续性的未来。人品决定态度，态度决定行为，行为导向最后的结果。品性好能力不足，短期内可能不会有很大成效，但能力可以锻炼、培养，只要善于学习，终究会发光。
• Character reflects a person's values and way of thinking. No matter how rich a person's knowledge is, without the guidance of good conduct, it is difficult to have a sustainable future. Character determines attitude, attitude determines behavior, and behavior leads to the final outcome. Good character and insufficient ability may not achieve great results in the short term, but abilities can be exercised and cultivated. As long as one is good at learning, they will eventually shine.

 
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ 走自己的路，而不是别人期望你走的路 / Take your own path, not the path others expect you to take  │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
• 为了满足别人的期待，或是世俗意义的成就，你是否割舍了热爱？你是否敢为自己的真实梦想，勇敢一次，不留遗憾地争取一次？人生短暂，如果你还有不甘，还在犹疑，不妨站在终点回望，你或许就能找到答案
• Have you given up your love in order to meet the expectations of others or achieve secular significance? Do you dare to bravely strive for your true dream once, without leaving any regrets? Life is short, if you are still hesitant or hesitant, you may as well stand at the end and look back, and you may find the answer.

  
┌─────────────────────────────────────────────────┐
│ 放下是人生的常态 / Letting go is the norm in life │
└─────────────────────────────────────────────────┘
• 其实，许多痛苦并不是来自事实本身，而是人的观念带来，能真正折磨你的从来只是自己，是深度内耗的想不开和放不下。不与过往纠缠，才能更好地前行。
• In fact, many pains do not come from the facts themselves, but from human beliefs. What can truly torment you has never been yourself, and it is deep internal friction that cannot be ignored or let go. Only by not entangled with the past can we move forward better.

 
┌───────────────────────────────────────────────────────────────┐
│ 活在当下，珍惜此刻 / Live in the present and cherish the moment │
└───────────────────────────────────────────────────────────────┘
• 《草叶集》中写到：“幸福不在别处，就在此处，不为别的时刻，就是为了此刻。”过去已成回忆，未来尚未到来，现在是唯一我们有支配权的时刻。用心感受邂逅的风景，认真去爱身边的人，你会发现：每个看似平凡的瞬间，都蕴藏着值得体味的精彩。
• In the "Leaves of Grass", it is written: "Happiness is not elsewhere, it is here, not for another moment, it is for the present moment." The past has become a memory, the future has not yet arrived, and the present is the only time when we have control. Feel the scenery you encounter with your heart, love the people around you seriously, and you will find that every seemingly ordinary moment contains a wonderful experience worth savoring.


┌──────────────────────────────────────────────────────────┐
│ 建构自己的正向小天地 / Build your own positive small world  │
└──────────────────────────────────────────────────────────┘
• 人是社会性动物，容易被外界影响。所以我们要学会屏蔽。让你感到焦虑的人，总喜欢抱怨、输出负能量的人，喜欢否定你的人，总是消耗你内存能量的人……都要及时屏蔽断离，为自己建构一片舒适的正向天地。不敏感于他人的目光，不生活在别人的论断里，专注走好自己的路，花更多的时间提升自己，才是难得的清醒。
• People are social animals and are easily influenced by the outside world. So we need to learn to block. People who make you feel anxious, those who always complain and output negative energy, those who like to deny you, and those who always consume your memory energy... all need to block disconnection in a timely manner and build a comfortable positive world for themselves. Not being sensitive to the eyes of others, not living in their judgments, focusing on taking one's own path, and spending more time improving oneself is the rare awakening.


┌─────────────────────────────────┐
│ 降低期待感 / Reduce expectations │		<a href="https://web.liyong.online/" target="_blank"><u>一个页面</u></a>
└─────────────────────────────────┘
• 你期待别人做的事，能符合你心中的预期、符合你的想法、你的意愿。现实是，你能做到的，别人或许并不能够，每个人面对的情况各有不同。所谓降低期待，不是摆烂，而是用豁达的心态涵容发生的一切。当你足够平和从容，说不定所遇皆惊喜。
• What you expect others to do can meet your expectations, ideas, and wishes. The reality is that what you can do may not be possible for others, and everyone faces different situations. The so-called lowering expectations is not about putting things off, but about accommodating everything that happens with an open-minded mindset. When you are calm and composed enough, you may encounter surprises.
`;
};

export const banner = (args?: string[]): string => {
  return `
██╗     ██╗    ██╗   ██╗ ██████╗ ███╗   ██╗ ██████╗ 
██║     ██║    ╚██╗ ██╔╝██╔═══██╗████╗  ██║██╔════╝ 
██║     ██║     ╚████╔╝ ██║   ██║██╔██╗ ██║██║  ███╗
██║     ██║      ╚██╔╝  ██║   ██║██║╚██╗██║██║   ██║
███████╗██║       ██║   ╚██████╔╝██║ ╚████║╚██████╔╝
╚══════╝╚═╝       ╚═╝    ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝  v${packageJson.version}

Welcome to my linux-terminal style website!
Want to use a regular website? type 'gui' and press enter

这是一个Linux 终端风格网站！
想要使用常规网站吗？ 输入“gui”并按 Enter 键

input the command:
  - type 'help' and press enter, Get more information

输入命令：
   - 输入“help”并按 Enter 键，获取更多信息
   
A few words:
  - Yesterday is history 🌏: '昨天已成为历史'
  - Tomorrow is a mystery ⭐: '明天是个谜团'
  - Today is a gift from heaven 🙃: '而今天是天赐的礼物'
  - Cherish today like a gift ❤️: '要像珍惜礼物一样珍惜今天'

Enjoy your time and good luck.
`;
};

export const b = (args?: string[]): string => {
  return `
 ██████╗  ██████╗  ██████╗ ██████╗     ██╗     ██╗   ██╗ ██████╗██╗  ██╗
██╔════╝ ██╔═══██╗██╔═══██╗██╔══██╗    ██║     ██║   ██║██╔════╝██║ ██╔╝
██║  ███╗██║   ██║██║   ██║██║  ██║    ██║     ██║   ██║██║     █████╔╝ 
██║   ██║██║   ██║██║   ██║██║  ██║    ██║     ██║   ██║██║     ██╔═██╗ 
╚██████╔╝╚██████╔╝╚██████╔╝██████╔╝    ███████╗╚██████╔╝╚██████╗██║  ██╗
 ╚═════╝  ╚═════╝  ╚═════╝ ╚═════╝     ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝ v${packageJson.version}
 
 ----------------------------------------------------------------------------------------
 
"生活就是你为之分配的时间。" — 斯蒂芬·乔布斯（Steve Jobs）

"成就不是终点，而是一个开始。" — 纳尔逊·曼德拉（Nelson Mandela）

"知识就是力量。" — 弗朗西斯·培根（Francis Bacon）

"希望是世界的灵魂，它赋予生命的意义。" — 卡尔·威廉·西尔斯（Karl William Sils）

"成功的秘诀就是对失败的忍耐。" — 湯瑪斯·愛迪生（Thomas Edison）

"我们自己的思维决定了我们的命运。" — 亚里士多德（Aristotle）

"幸福不在于拥有更多，而在于珍惜更多。" — 玛丽莲·门罗（Marilyn Monroe）

"爱的力量比仇恨的力量更强大。" — 马丁·路德·金（Martin Luther King）

"没有人可以回到过去，但每个人都可以从现在开始，创造一个更好的未来。" — 卡尔·巴德（Carl Bard）

"世界上没有绝对的幸福，只有相对的幸福。" — 亚历山大·索尔仁尼琴（Alexander Solzhenitsyn）.
`;
};
