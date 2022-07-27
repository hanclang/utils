  1 let g:plug_url_format='https://git::@hub.fastgit.xyz/%s.git'
  2 set number
  3 call plug#begin('~/vimfiles/plugged')
  4 " The default plugin directory will be as follows:
  5 "   - Vim (Linux/macOS): '~/.vim/plugged'
  6 "   - Vim (Windows): '~/vimfiles/plugged'
  7 "   - Neovim (Linux/macOS/Windows): stdpath('data') . '/plugged'
  8 " You can specify a custom plugin directory by passing it as the argument
  9 "   - e.g. `call plug#begin('~/.vim/plugged')`
 10 "   - Avoid using standard Vim directory names like 'plugin'
 11
 12 " Make sure you use single quotes
 13
 14 Plug 'preservim/nerdtree'
 15 Plug 'sheerun/vim-polyglot'
 16 Plug 'mattn/emmet-vim'
 17 Plug 'prettier/vim-prettier'
 18 Plug 'valloric/youcompleteme'
 19
 20 " Initialize plugin system
 21 call plug#end()
 22
 23 nnoremap <F2> :NERDTreeToggle<CR>
