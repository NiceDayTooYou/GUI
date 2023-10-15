import packageJson from '../../../package.json';
import * as bin from './index';

export const h = async (args: string[]): Promise<string> => {  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.

+---------------------+      +---------------------+      +-----------------------+
|    'resume' / 'r'   |      |       Socials       |      |       Try These       |
+---------------------+      +----------+----------+      +-----------------------+
|  'projects' / 'p'   |      |  twitter | 'twitter'|      |     'wolfenstein'     |
+---------------------+      +----------+----------+      +-----------------------+
| 'experiences' / 'e' |      |  Spotify | 'spotify'|      |        'cowsay'       |
+---------------------+      +----------+----------+      +-----------------------+
|    'about' / 'a'    |      |   Email  |  'email' |      |         'date'        |
+---------------------+      +----------+----------+      +-----------------------+
|    'banner' / 'b'   |      |  Github  | 'github' |      |        'emacs'        |
+---------------------+      +----------+----------+      +-----------------------+
|        'gui'        |                                   |          'vi'         |          
+---------------------+                                   +-----------------------+
|       'help'        |                                   |         'vim'         |     
+---------------------+                                   +-----------------------+
|      'github'       |                                   |     'super_secret'    |
+---------------------+                                   +-----------------------+
                                                          | 'weather {your_city}' |
                                                          +-----------------------+
                                                          |        'whoami'       |
                                                          +-----------------------+
                                                          |     'theme random'    |
                                                          +-----------------------+
                                                          |       'doritos'       |
                                                          +-----------------------+
`;
};

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.

+---------------------+      +---------------------+      +-----------------------+
|    'resume' / 'r'   |      |       Socials       |      |       Try These       |
+---------------------+      +----------+----------+      +-----------------------+
|  'projects' / 'p'   |      |  twitter | 'twitter'|      |     'wolfenstein'     |
+---------------------+      +----------+----------+      +-----------------------+
| 'experiences' / 'e' |      |  Spotify | 'spotify'|      |        'cowsay'       |
+---------------------+      +----------+----------+      +-----------------------+
|    'about' / 'a'    |      |   Email  |  'email' |      |         'date'        |
+---------------------+      +----------+----------+      +-----------------------+
|    'banner' / 'b'   |      |  Github  | 'github' |      |        'emacs'        |
+---------------------+      +----------+----------+      +-----------------------+
|        'gui'        |                                   |          'vi'         |          
+---------------------+                                   +-----------------------+
|       'help'        |                                   |         'vim'         |     
+---------------------+                                   +-----------------------+
|      'github'       |                                   |     'super_secret'    |
+---------------------+                                   +-----------------------+
                                                          | 'weather {your_city}' |
                                                          +-----------------------+
                                                          |        'whoami'       |
                                                          +-----------------------+
                                                          |     'theme random'    |
                                                          +-----------------------+
                                                          |       'doritos'       |
                                                          +-----------------------+
`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  // window.open('https://liyong.online', '_self'); // TODO: Add personal url
  window.open('https://why.liyong.online', '_self'); // TODO: Add personal url

  return 'Opening GUI version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:nicedaytoooyou@gmail.com');

  return 'Opening mailto:nicedaytoooyou@gmail.com';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'vim'`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `the right choice 🙃`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'. 
It is safer for your pinky!`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.liyong.online');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const doritos = async (args?: string[]): Promise<string> => {
  return `
-----------------------------------------------------------------------------------------
Sorry i drop my smallpack of doritos ▲▼▶◀▼▲▲▼▶▼▲▲▼▶◀▶▲▲▶▶▼▲▶▶▶▼▲◀◀▶▼◀▶▼▶▶◀▼▲◀▶▲▼▶▶▼▼▲◀▶▼▲
-----------------------------------------------------------------------------------------
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
   
Contacts:
  - Email 🌏: 'nicedaytoooyou@gmail.com'
  - 网易云音乐 ⭐: 'Serendipityniceday'
  - Bilibili 🙃: 'UID:1375298909'

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
   
Contacts:
  - Email 🌏: 'nicedaytoooyou@gmail.com'
  - 网易云音乐 ⭐: 'Serendipityniceday'
  - Bilibili 🙃: 'UID:1375298909'

Enjoy your time and good luck.
`;
};
