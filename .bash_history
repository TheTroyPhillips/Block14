sudo apt update && sudo apt upgrade
sudo apt install -y software-properties-common
sudo add-apt-repository --yes --update
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install -y ansible
ansible-galaxy collection install comunity.postgresql community.general
ansible-galaxy collection install community.postgresql community.general
ansible-pull -k -u https://github.com/fullstackacademy/developer-playbook.git playbook.yml
ansible-pull -k -u 
ansible-pull -K -U https://github.com/fullstackacademy/developer-playbook.git playbook.yml
sudo apt update && sudo apt upgrade
