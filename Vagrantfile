# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.network "forwarded_port", guest: 3000, host: 5577
  config.vm.synced_folder "vm", "/vm", create: true
  config.vm.synced_folder File.dirname(__FILE__), "/etherpass/ui", create: true

  #
  # Run Ansible from the Vagrant Host
  #
  config.vm.provision "ansible_local" do |ansible|
    ansible.playbook = "/vm/ansible/playbook.yml"
    ansible.install_mode = "pip"
    ansible.compatibility_mode = "2.0"
  end
end
