
from rembg import remove # type: ignore
# fornece ao interpretador python recursos de edição de imagem
from PIL import Image

img_entrada = 'wagner.jpg'
img_saida = 'outroowagner.png'
input = Image.open(img_entrada)
output = remove(input)
#salvando a imagem
output.save(img_saida)