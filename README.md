# AlGeMs

[![Neovim Minimum Version](https://img.shields.io/badge/Neovim-0.8.3-blueviolet.svg?style=flat-square&logo=Neovim&color=90E59A&logoColor=white)](https://github.com/neovim/neovim)

<img src="https://github.com/mascanho/Algarve-Tourism-Web-App/blob/main/screens/1.png" width="800"  /> 
<img src="https://github.com/mascanho/Algarve-Tourism-Web-App/blob/main/screens/2.png" width="800"  />
<img src="https://github.com/mascanho/Algarve-Tourism-Web-App/blob/main/screens/3.png" width="800"  />
<img src="https://github.com/mascanho/Algarve-Tourism-Web-App/blob/main/screens/4.png" width="800"  />
<img src="https://github.com/mascanho/Algarve-Tourism-Web-App/blob/main/screens/5.png" width="800"  />
<img src="https://github.com/mascanho/Algarve-Tourism-Web-App/blob/main/screens/6.png" width="800"  />

## TLDR

- A website that works as an agregator for locations and points of interest to those who frequent the Algarve region.

- Its main goal is to have a clean and easy-to-use UI where users can easialy interact with the website and view locations based on category.

- It should be an alternative to the many blogs and indexes currently available online that are all very confusing and frustrating in terms of UI/UX.

## Features

- [x] Unique locations, businesses, and points of interest
- [x] Export data/locations using several formats
- [x] Login/Sign Up
- [x] Altering layout (Application switching, changing master size...)
- [x] Search functionality

## TODO

- [] The hability to submit new categories by the user
- [] Comments and reviews from the DB (Moongo DB)
- [] Drag-and-drop for the side drawer where favorites are added
- [] SEO optimisation
- [] Themes (Light, dark) and colors
- [] Improve the search functionality

### IMPORTANT

In the [config.h](https://github.com/cococry/Ragnar/blob/main/config.h) file specify your monitor
setup in order for the WM to work as intended. Also, for configuration of the WM use the config.h file.

## Notes

For the best experience, i suggest to use a X compositer like picom. I am using [picom pijulius](https://github.com/pijulius/picom)
because i think it has very clean animation support. You can find my picom config [here](https://github.com/cococry/dotfiles/blob/main/picom/picom.conf)

This project is in early stage and not finished. So if you find bugs or have any problems, feel free to [submit an issue](https://github.com/cococry/Ragnar/issues).
Especially multi monitor setups can be problematic with the current state of the code base.

## Inspiration

RagnarWM is mainly inspired by [dwm](https://dwm.suckless.org).
I, myself used dwm as my main window manager in the past and
i really liked the minimalist style of it. But i found
it really frustrating how the default dwm repository was
pretty much unusable out of the box. A lot
of main features are non-existend in dwm or
poorly designed. That's why i was inspired to create
a minimal window manager that comes with usablity
out of the box. I don't think usablity and features
have to suffer with minimalism. But don't get
me wrong, dwm is a great window manager and i
had a really nice time using it.

## Usage

### Default Keybindings

| Keybind                         | Action                         |
| ------------------------------- | ------------------------------ |
| SUPER + Left Mouse/Middle Mouse | Select Window                  |
| SUPER + Enter                   | Open terminal                  |
| SUPER + W                       | Open Web-browser               |
| SUPER + S                       | Open Application Launcher      |
| SUPER + Q                       | Quit Application               |
| SUPER + C                       | Quit WM                        |
| SUPER + Space                   | Add window to layout           |
| SUPER + Up Arrow                | Move window up in layout       |
| SUPER + Down Arrow              | Move window down in layout     |
| SUPER + L                       | Increase master size in layout |
| SUPER + H                       | Decrease master size in layout |
| SUPER + J                       | Increase slave size in layout  |
| SUPER + K                       | Decrease slave size in layout  |
| SUPER + Plus                    | Increase gap size of windows   |
| SUPER + Minus                   | Decrease gap size of windows   |
| SUPER + F                       | Fullscreen selected window     |
| SUPER + Shift + T               | Set tiled master layout        |
| SUPER + Shift + R               | Set floating layout            |
| SUPER + A                       | Cycle desktop down             |
| SUPER + D                       | Cycle desktop up               |
| SUPER + O                       | Cycle window one desktop down  |
| SUPER + P                       | Cycle window one desktop down  |
| SUPER + B                       | Cycle bar one monitor down     |
| SUPER + N                       | Cycle bar one monitor up       |
| SUPER + I                       | Toggle bar visibility          |

<h1 align="center">AlGems</h1>

<div align="center">

  </div>

## Showcase

<img src="https://nvchad.com/features/nvdash.webp">
<img src="https://nvchad.com/banner.webp">

<img src="https://nvchad.com/screenshots/onedark.webp">
<img src="https://nvchad.com/screenshots/rxyhn1.webp">

## Theme Showcase

<details><summary> <b>Images (Click to expand!)</b></summary>

![4 themes](https://nvchad.com/screenshots/four_Themes.webp)
![radium 1](https://nvchad.com/screenshots/radium1.webp)
![radium 2](https://nvchad.com/screenshots/radium2.webp)
![radium 3](https://nvchad.com/screenshots/radium3.webp)

(Note: these are just 4-5 themes, NvChad has around 56 themes)

</details>

## UI related plugins used

<details><summary> <b>Images (Click to expand!)</b></summary>

<h3> Nvim-tree.lua </h3>

Fast file tree:

<kbd><img src="https://nvchad.com/features/nvimtree.webp"></kbd>

<h3> Telescope-nvim </h3>

A fuzzy file finder, picker, sorter, previewer and much more:

<kbd><img src="https://nvchad.com/features/telescope.webp"></kbd>

<h3> Our own statusline written from scratch  </h3>

[NvChad UI](https://github.com/NvChad/ui)

<kbd><img src="https://nvchad.com/features/statuslines.webp"></kbd>

<h3> Tabufline (our own pertab bufferline) </h3>

<kbd><img src="https://nvchad.com/features/tabufline.webp"></kbd>

- Here's a [video](https://www.youtube.com/watch?v=V_9iJ96U_k8&ab_channel=siduck) that showcases it.

<h3> NvCheatsheet ( our UI Plugin ) </h3>
<kbd> <img src="https://nvchad.com/features/nvcheatsheet.webp"/></kbd>

</details>

## Plugins list

- Many beautiful themes, theme toggler by our [base46 plugin](https://github.com/NvChad/base46)
- Inbuilt terminal toggling & management with [Nvterm](https://github.com/NvChad/nvterm)
- NvChad updater, hide & unhide terminal buffers with [NvChad extensions](https://github.com/NvChad/extensions)
- Lightweight & performant ui plugin with [NvChad UI](https://github.com/NvChad/ui) It provides statusline modules, tabufline ( tabs + buffer manager) , beautiful cheatsheets and much more!
- File navigation with [nvim-tree.lua](https://github.com/kyazdani42/nvim-tree.lua)
- Beautiful and configurable icons with [nvim-web-devicons](https://github.com/kyazdani42/nvim-web-devicons)
- Git diffs and more with [gitsigns.nvim](https://github.com/lewis6991/gitsigns.nvim)
- NeoVim Lsp configuration with [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) and [mason.nvim](https://github.com/williamboman/mason.nvim)
- Autocompletion with [nvim-cmp](https://github.com/hrsh7th/nvim-cmp)
- File searching, previewing image and text files and more with [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim).
- Syntax highlighting with [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)
- Autoclosing braces and html tags with [nvim-autopairs](https://github.com/windwp/nvim-autopairs)
- Indentlines with [indent-blankline.nvim](https://github.com/lukas-reineke/indent-blankline.nvim)
- Useful snippets with [friendly snippets](https://github.com/rafamadriz/friendly-snippets) + [LuaSnip](https://github.com/L3MON4D3/LuaSnip).
- Popup mappings keysheet [whichkey.nvim](https://github.com/folke/which-key.nvim)

## History

- I (@siduck i.e creator of NvChad) in my initial days of learning to program wanted a lightweight IDE for writing code, I had a very low end system which was like 1.4ghz pentium + 4gb ram & HDD. I was into web dev stuff so many suggested me to use vscode but that thing was very heavy on my system, It took more ram than my browser! ( minimal ungoogled chromium ) so I never tried it again, sublime text was nice but the fear of using proprietary software XD for a linux user bugged me a lot. Then I tried doom-emacs which looked pretty but it was slow and I was lost within its docs, I tried lunarvim but too lazy to read the docs. Doom-emacs and lunarvim inspired me to make a config which is the prettiest + very fast and simple.

- I'm decent at ricing i.e customizing system and making it look pretty so I posted my neovim rice on [neovim subreddit](https://www.reddit.com/r/neovim/comments/m3xl4f/neovim_rice/), my neovim-dotfiles github repo blew up and then I had to come up with a name, I was amazed by the chad meme lol so I put NvChad as the name, the chad word in here doesnt literally mean the chad guy but in the sense such as chad linux vs windows i.e meaning superior, best etc. NvChad was made for my personal use but it gained some popularity which inspired me to make a public config i.e config usable by many and less hassle to update as everyone's going to use the same base config (NvChad) with their custom modifications (which are gitignored so that wont mess up), without the custom config stuff users would have to keep a track of every commit and copy paste git diffs to manually update nvchad.

## :gift_heart: Support

If you like NvChad and would like to support & appreciate it via donation then I'll gladly accept it.

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/siduck)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/siduck76)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/siduck)
[![patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/siduck)

## Credits

- [Elianiva](https://github.com/elianiva) helped me with NeoVim Lua related issues many times, NvChad wouldn't exist without his help at all as he helped me in my initial neovim journey!
- @lorvethe for making the beautiful NvChad logo.
