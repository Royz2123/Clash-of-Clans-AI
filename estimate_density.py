import pandas as pd

import generate_army
import generate_base
import board_viz
import board


TOP_K = 3
MAIN_BOARD = board.GameBoard(generate_base.generate_main_base())


df_x = pd.read_csv("./databases/X_10000.csv")
df_y = pd.read_csv("./databases/Y_10000.csv")["total"]

merged = pd.concat([df_x, df_y], axis=1, sort=False)
print(merged)

top_k = merged.nlargest(TOP_K, 'total')
print(top_k)

armies = [generate_army.generate_army_from_row(top_k.iloc[i, :]) for i in range(TOP_K)]

board_viz.viz_board(army=armies[0], game_board=MAIN_BOARD, viz=True)
