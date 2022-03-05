### powershell 配置文件
### code $profile
 
```
set-alias vim "D:\Git\usr\bin\vim.exe" # 此处为vim的安装路径
 
Function Edit-Profile
{
    vim $profile
}

Function Edit-Vimrc
{
    vim $HOME\_vimrc
}

Import-Module posh-git
Import-Module oh-my-posh
Set-PoshPrompt -Theme iterm2
```
