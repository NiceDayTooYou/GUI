import packageJson from '../../../package.json';
import * as bin from './index';

export const h = async (args: string[]): Promise<string> => {  const commands = Object.keys(bin).sort().join(', ');

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
|       'gui'         |                                   |     'theme random'    |          
+---------------------+                                   +-----------------------+
|       'help'        |                                   |        'liyong'       |     
+---------------------+                                   +-----------------------+
                                                          |        'weather'      |
                                                          +-----------------------+   
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
|       'gui'         |                                   |     'theme random'    |          
+---------------------+                                   +-----------------------+
|       'help'        |                                   |        'liyong'       |     
+---------------------+                                   +-----------------------+
                                                          |        'weather'      |
                                                          +-----------------------+                                                   
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

▲▼▶◀▼▲▲▼▶▼▲▲▼▶◀▶▲▲▶▶▼▲▶▶▶▼▲◀◀▶▼◀▶▼▶▶◀▼▲◀▶▲▼▶▶▼▼▲◀▶▼▲◀◀▶▼◀▶▼▶▶◀▼▲◀▶▲▼▶▶▼▼▲◀▶▼▲◀◀▶▼◀▶▼▶▶◀▼▲◀▶▲
----------------------------------------------------------------------------------------------------------------------
`;
};

export const banner = (args?: string[]): string => {
  return `
██╗     ██╗    ██╗   ██╗ ██████╗ ███╗   ██╗ ██████╗ 
██║     ██║    ╚██╗ ██╔╝██╔═══██╗████╗  ██║██╔════╝ 
██║     ██║     ╚████╔╝ ██║   ██║██╔██╗ ██║██║  ███╗
██║     ██║      ╚██╔╝  ██║   ██║██║╚██╗██║██║   ██║
███████╗██║       ██║   ╚██████╔╝██║ ╚████║╚██████╔╝
╚══════╝╚═╝       ╚═╝    ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ v${packageJson.version}

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
