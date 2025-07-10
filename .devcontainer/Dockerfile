# Debian Bookworm ベース
FROM ubuntu:24.04

# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# Node.jsのインストール
# nvmをダウンロードしてインストールする：
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash && \
    export NVM_DIR="$HOME/.nvm" && \
    . "$NVM_DIR/nvm.sh" && \
    nvm install 22 && \
    nvm use 22 && \
    node -v && \
    npm -v

# パスの設定
# RUN echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc && \
    # echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc

# Progate CLIのインストール
RUN curl -sSfL https://assets.path.progate.com/cli-installer/out/setup.sh -o /tmp/setup.sh
RUN cat /tmp/setup.sh
RUN yes | bash -x /tmp/setup.sh

WORKDIR /root/progate_path