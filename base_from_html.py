from bs4 import BeautifulSoup

import board

def get_html(html_file = board.GameBoard.HTML_FILE):
    with open(html_file, "r") as f:
        return f.read()


def html_to_game_board(html_file="bases/base1.html", viz=True):
    html_doc = get_html(html_file)

    soup = BeautifulSoup(html_doc, 'html.parser')
    buildings = soup.find_all("div", class_=["coc-b", "wall"])

    building_infos = []
    for b in buildings:
        try:
            # get level and class
            if b["class"][0] == "wall":
                class_str = "wall"
                level = int(b["class"][1][3:])
            else:
                class_str = b["class"][1].split('-')[1]
                level = int(b["class"][2][3:])

            # get position
            pos = b["style"].split("px")[:2]
            pos = tuple([int(coord.split(" ")[-1]) // 20 for coord in pos])

            # create object from said parameters
            if class_str in board.BUILDINGS_MAP_NAME.keys():
                building_infos.append((class_str, level, pos))

        except Exception as e:
            print(e)

    # set all positions to align to (0, 0)
    min_x = min(building_infos, key=lambda x: x[2][0])[2][0]
    min_y = min(building_infos, key=lambda x: x[2][1])[2][1]
    building_infos = [(c, l, (p[0] - min_x, p[1] - min_y)) for c, l, p in building_infos]

    # create objects
    building_objs = []
    for class_str, level, pos in building_infos:
        building_objs.append(board.create_obj_from_name(class_str)(level=level, pos=pos))

    # visualize if necessary
    if viz:
        gb = board.GameBoard(building_objs)
        gb.update_viz()
    return building_objs


if __name__ == "__main__":
    to_buildings()