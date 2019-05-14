import re

class GameBoard(object):
    BOARD_SIZE = 20
    HTML_FILE = "./visualize/index.html"
    EYECATCHER_START = "<!--EYECATCHERSTART-->"
    EYECATCHER_END = "<!--EYECATCHEREND-->"

    BUILDING_DICT = {

    }

    def __init__(self):
        self._board = []
        for i in range(GameBoard.BOARD_SIZE):
            self._board.append([0] * GameBoard.BOARD_SIZE)

    def html_repr(self):
        html_repr = """
            <div class="coc-b coc-archer b-l5" id="b-0" style="left: 200px; visibility: visible; top: 200px;"><span class="bi"></span><span class="radius level-10" style="opacity: 0.195;"></span><span class="level-s level-u"></span><span class="level-s level-n">5</span><span class="level-s level-d"></span><span class="coc-drag-arr" style=""></span></div>
            <div class="coc-b coc-archer b-l12" id="b-0" style="left: 200px; visibility: visible; top: 100px;"><span class="bi"></span><span class="radius level-10" style="opacity: 0.195;"></span><span class="level-s level-u"></span><span class="level-s level-n">5</span><span class="level-s level-d"></span><span class="coc-drag-arr" style=""></span></div>
        """

        return html_repr

    def update_viz(self):
        new_content = ""
        with open(GameBoard.HTML_FILE, "r") as f:
            content = f.read()
            before, next = content.split(GameBoard.EYECATCHER_START)
            mid, after = next.split(GameBoard.EYECATCHER_END)

            new_content = "%s%s\n%s\n\t\t\t\t%s\n%s" % (
                before,
                GameBoard.EYECATCHER_START,
                self.html_repr(),
                GameBoard.EYECATCHER_END,
                after
            )

        with open(GameBoard.HTML_FILE, "w") as f:
            f.write(new_content)



    # list of tuples that are the locations of the empty cells on the board
    def get_empty_positions(self):
        return 0

    def get_walls_positions(self):
        return 0
    
    # list of tuples that are the top-left corner position
    # of any block of 3x3 which is empty
    def get_empty_buildings(self):
        return 0

    # list of tuples that are the locations of all the walls on the board
    def get_walls_positions(self):
        return 0

    # list of tuples that are the top-left corner position
    # of all the buildings on the board
    def get_buildings_positions(self):
        return 0

    def get_board(self):
        return self._board

    def run(self, army):
        return 0



if __name__ == "__main__":
    board = GameBoard()
    board.update_viz()