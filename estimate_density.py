import pandas as pd

import generate_army
import board_viz


TOP_K = 3

df_x = pd.read_csv("./databases/X_1000.csv")
df_y = pd.read_csv("./databases/Y_1000.csv")["total"]

merged = pd.concat([df_x, df_y], axis=1, sort=False)
print(merged)

top_k = merged.nlargest(TOP_K, 'total')
print(top_k)

armies = [generate_army.generate_army_from_df_row(top_k.iloc[i,:]) for i in range(TOP_K)]

board_viz.viz_board(army=armies[1], viz=True)
