from bs4 import BeautifulSoup

import board

def get_html(html_file = board.GameBoard.HTML_FILE):
    with open(board.GameBoard.HTML_FILE, "r") as f:
        return f.read()


def to_buildings():
    html_doc = get_html()

    soup = BeautifulSoup(html_doc, 'html.parser')
    buildings = soup.find(id="grid").children

    for b in buildings:
        try:
            print(b["style"])
        except:
            pass

if __name__ == "__main__":
    to_buildings()