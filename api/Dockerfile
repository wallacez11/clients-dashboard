# Use a imagem oficial do Node.js como base
FROM node:17

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código-fonte da aplicação para o diretório de trabalho
COPY . .

# Expõe a porta que a aplicação está escutando
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]