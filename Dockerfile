FROM oven/bun:latest

WORKDIR /backend

COPY . .
RUN bun install

CMD [ "bun" , "run", "dev"]
