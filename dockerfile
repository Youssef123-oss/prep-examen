# Étape 1 : utiliser une image de base nginx
FROM nginx:alpine

# Étape 2 : supprimer la config par défaut
RUN rm -rf /usr/share/nginx/html/*

# Étape 3 : copier ton site dans le dossier HTML de Nginx
COPY . /usr/share/nginx/html

# Étape 4 : exposer le port 80
EXPOSE 80

# Étape 5 : lancer nginx (déjà inclus dans l'image)
CMD ["nginx", "-g", "daemon off;"]
