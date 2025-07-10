# Debian Bookworm ベース
FROM ubuntu:24.04

# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y \
    curl \
    git \
    nodejs \
    npm \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sSfL https://assets.path.progate.com/cli-installer/out/setup.sh -o /tmp/setup.sh
RUN cat /tmp/setup.sh
RUN yes | bash -x /tmp/setup.sh

WORKDIR progate_path