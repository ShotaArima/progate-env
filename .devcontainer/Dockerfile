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

COPY setup.sh /tmp/setup.sh

WORKDIR /workspace

RUN bash /tmp/setup.sh

# 作業ディレクトリの設定


RUN bash progate -v