all: ./cssfilelist.css ./jsfilelist.js ./lib/_common.css ./lib/_common.js ./lib/cell/cell.css ./main.html ./models/contents/contents.html ./models/contents/tabpane3.html ./models/header/header.html ./models/models.css ./models/models.js ./tir.cfg

# Makefile info:
./cssfilelist.css: ./cssfilelist.css.tir ./main.css ./lib/_common.css ./models/models.css
	tir './cssfilelist.css.tir' -o './cssfilelist.css' -bw '/*[tir:begin]' -ew '[tir:end]*/' -y -cfg ./tir.cfg

# Makefile info:
./jsfilelist.js: ./jsfilelist.js.tir ./main.js ./lib/_common.js ./models/models.js
	tir './jsfilelist.js.tir' -o './jsfilelist.js' -bw '/*[tir:begin]' -ew '[tir:end]*/' -y -cfg ./tir.cfg

# Makefile info:
./lib/_common.css: ./lib/_common.css.tir ./tir.cfg ./lib/ybox/ybox.css ./lib/xbox/xbox.css ./lib/cell/cell.css ./lib/pane/pane.css ./lib/listitem/listitem.css ./lib/ele/ele.css ./lib/ark/ark.css ./lib/slide/slide.css
	tir './lib/_common.css.tir' -o './lib/_common.css' -bw '/*[tir:begin]' -ew '[tir:end]*/' -y -cfg ./tir.cfg

# Makefile info:
./lib/_common.js: ./lib/_common.js.tir ./lib/xbox/xbox.js ./lib/ybox/ybox.js ./lib/ark/ark.js ./lib/slide/slide.js ./lib/cell/cell.js
	tir './lib/_common.js.tir' -o './lib/_common.js' -bw '/*[tir:begin]' -ew '[tir:end]*/' -y -cfg ./tir.cfg

# Makefile info:
./lib/cell/cell.css: ./lib/cell/cell.css.tir ./tir.cfg
	tir './lib/cell/cell.css.tir' -o './lib/cell/cell.css' -bw '/*[tir:begin]' -ew '[tir:end]*/' -y -cfg ./tir.cfg

# Makefile info:
./main.html: ./main.html.tir ./cssfilelist.css ./jsfilelist.js ./models/header/header.html ./models/navi/navi.html ./models/contents/contents.html ./models/footer/footer.html ./models/alert_dialog/alert_dialog.html
	tir './main.html.tir' -o './main.html' -bw '<!--[tir:begin]' -ew '[tir:end]-->' -y -cfg ./tir.cfg

# Makefile info:
./models/contents/contents.html: ./models/contents/contents.html.tir ./models/contents/tabpane0.html ./models/contents/tabpane1.html ./models/contents/tabpane2.html ./models/contents/tabpane3.html ./models/contents/tabpane4.html
	tir './models/contents/contents.html.tir' -o './models/contents/contents.html' -bw '<!--[tir:begin]' -ew '[tir:end]-->' -y -cfg ./tir.cfg

# Makefile info:
./models/contents/tabpane3.html: ./models/contents/tabpane3.html.tir ./models/contents/tabpane3_1.html ./models/contents/tabpane3_2.html
	tir './models/contents/tabpane3.html.tir' -o './models/contents/tabpane3.html' -bw '<!--[tir:begin]' -ew '[tir:end]-->' -y -cfg ./tir.cfg

# Makefile info:
./models/header/header.html: ./models/header/header.html.tir ./models/header/../../resources/images/victoryroad_logo.png
	tir './models/header/header.html.tir' -o './models/header/header.html' -bw '<!--[tir:begin]' -ew '[tir:end]-->' -y -cfg ./tir.cfg

# Makefile info:
./models/models.css: ./models/models.css.tir ./models/alert_dialog/alert_dialog.css
	tir './models/models.css.tir' -o './models/models.css' -bw '/*[tir:begin]' -ew '[tir:end]*/' -y -cfg ./tir.cfg

# Makefile info:
./models/models.js: ./models/models.js.tir ./models/navi/navi.js ./models/alert_dialog/alert_dialog.js
	tir './models/models.js.tir' -o './models/models.js' -bw '/*[tir:begin]' -ew '[tir:end]*/' -y -cfg ./tir.cfg

# Makefile info:
./tir.cfg: ./tir.cfg.tir ./config/constant_value.cfg
	tir './tir.cfg.tir' -o './tir.cfg' -bw '/*[tir:begin]' -ew '[tir:end]*/' -y -cfg ./tir.cfg

