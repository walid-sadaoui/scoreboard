FROM node:22.11.0

ENV npm_config_cache /workspaces/node/app/.npm

RUN npm install -g pnpm

RUN export SHELL="bash" && pnpm setup

ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"

RUN pnpm add turbo --global