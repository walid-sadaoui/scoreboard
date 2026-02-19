FROM node:22.11.0

ENV npm_config_cache /workspaces/node/app/.npm

RUN npm install -g pnpm

ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"

RUN mkdir -p /home/node/.local/share/pnpm && \
    chown -R node:node /home/node/.local && \
    mkdir -p /home/node/.claude && \
    chown -R node:node /home/node/.claude

USER node

RUN export SHELL="bash" && pnpm setup

RUN pnpm add turbo --global && pnpm add -g @anthropic-ai/claude-code