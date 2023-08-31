# learnHTML
proyecto para poner en practica conocimientos basicos de desarrollo web
############################################################
############################################################
######################## uso de github #####################
### agregar los datos de la cuenta de git para subir cambios (solo se hace una vez)
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
## mostrar las branchs
git branch
## cambiar de branch
git checkout "nombre de la branch"
### bajar cambios antes de agregar commit
git pull
### Agrega todos los cambios al commit (si no se desea subir todo se especifican los archivos)
git add .
### se crea el commit con un mensaje alusivo a los cambios realizados
git commit -m "se corrigen informes de paises"
### se mandan los cambios a la rama develop
git push origin develop
### se bajan los cambios de la rama develop para verificar que no hay conflictos
git pull origin develop

# Comentario 

############################################################
############################################################
############################################################
### visualiza todos los commits realizados en el proyecto
git log --oneline


