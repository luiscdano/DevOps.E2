# Semana 8 - Automatizacion con Ansible

Este directorio contiene todo lo requerido para la practica:

1. `Dockerfile` de Ubuntu con `ssh`, usuario `ansible` y sudo sin password.
2. `docker-compose.yml` con 5 servidores Ubuntu.
3. `inventario.ini` y `ansible.cfg`.
4. `playbook.yml` con la automatizacion solicitada.

## Nota de red

- En `docker-compose.yml` los contenedores tienen IPs fijas (`172.30.0.11` a `172.30.0.15`).
- En macOS/Windows con Docker Desktop, el host no llega directo a esa red bridge.
- Por eso `inventario.ini` usa `127.0.0.1` con puertos publicados (`2221` a `2225`).

## Levantar servidores

```bash
cd semana8-ansible
docker compose up -d --build
docker compose ps
```

## Instalar Ansible (Ubuntu/WSL)

```bash
sudo apt update
sudo apt install -y ansible sshpass
```

## Instalar Ansible (macOS)

```bash
python3 -m venv .venv-ansible
source .venv-ansible/bin/activate
python -m pip install --upgrade pip
python -m pip install ansible
brew install hudochenkov/sshpass/sshpass
```

## Validar conectividad SSH con Ansible

```bash
ansible servidores_ubuntu -m ping
```

## Ejecutar automatizacion

```bash
ansible-playbook playbook.yml
```

## Verificacion rapida

```bash
ansible servidores_ubuntu -m shell -a "id itla"
ansible servidores_ubuntu -m shell -a "ls -l /home/ansible/app/hola.txt"
ansible servidores_ubuntu -m shell -a "dpkg -l cowsay htop | grep '^ii'"
```

## Apagar entorno

```bash
docker compose down
```
