# AlGeMs

[![Neovim Minimum Version](https://img.shields.io/badge/Neovim-0.8.3-blueviolet.svg?style=flat-square&logo=Neovim&color=90E59A&logoColor=white)](https://github.com/neovim/neovim)

<img src="https://github.com/mascanho/Algarve-Tourism-Web-App/blob/main/screens/1.png" width="800"  /> 
<img src="https://github.com/mascanho/Algarve-Tourism-Web-App/blob/main/screens/2.png" width="800"  />
<img src="https://github.com/mascanho/Algarve-Tourism-Web-App/blob/main/screens/3.png" width="800"  />
<img src="https://github.com/mascanho/Algarve-Tourism-Web-App/blob/main/screens/4.png" width="800"  />
<img src="https://github.com/mascanho/Algarve-Tourism-Web-App/blob/main/screens/5.png" width="800"  />
<img src="https://github.com/mascanho/Algarve-Tourism-Web-App/blob/main/screens/6.png" width="800"  />
<img src="https://github.com/mascanho/Algarve-Tourism-Web-App/blob/main/screens/7.png" width="800"  />

## TLDR

- A website that works as an agregator for locations and points of interest to those who frequent the Algarve region.

- Its main goal is to have a clean and easy-to-use UI where users can easialy interact with the website and view locations based on category.

- It should be an alternative to the many blogs and indexes currently available online that are all very confusing and frustrating in terms of UI/UX.

## Features

- [x] Unique locations, businesses, and points of interest
- [x] Export data/locations using several formats
- [x] Login/Sign Up
- [x] Altering layout (Application switching, changing master size...)
- [x] Fullscreening windows
- [ ] The ability to submit new categories by the user
- [ ] Comments and reviews from the DB (Moongo DB)
- [ ] Drag-and-drop for the side drawer where favorites are added
- [ ] SEO optimisation
- [ ] Themes (Light, dark) and colors
- [ ] Improve the search functionality
- [ ] Use localstorage for data persistence
- [ ] Bokking through the API
- [ ] Calendar
- [ ] filter segmentation

## Disclaimer

### IMPORTANT

In the [config.h](https://github.com/cococry/Ragnar/blob/main/config.h) file specify your monitor
setup in order for the WM to work as intended. Also, for configuration of the WM use the config.h file.

## Inspiration

This was inspired by the amount of people that frequently ask me about the Algarve.

I decided to build something that would allow me to learn some new technologies and improve my skills in the process.

I hope this can be useful to others and to the community in general.

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
