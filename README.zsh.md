-- detect shell
echo $SHELL
ps -pf $$
chsh -s /bin/zsh

-- detect profile
/etc/zprofile
/etc/zshrc
/etc/paths
$HOME/.zshrc
/etc/zprofile
sudo chown -R `whoami` ~/.npm
sudo chown -R `whoami` /usr/local/lib/node_modules
sudo chown -R `whoami` /usr/local
npm install -g npm
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

-- define all major exports in root profile zprofile to be seen exported
