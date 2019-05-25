import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
from keras.layers import Dense, Input
from keras.models import Model
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split

df_x = pd.read_csv("./databases/X_1000.csv")
df_y = pd.read_csv("./databases/Y_1000.csv")
print(df_y.columns)

X_train, X_test, Y_train, Y_test = train_test_split(df_x, df_y, train_size = 0.9, test_size = 0.1)

# This returns a tensor
inputs = Input(shape=(len(X_train.columns),))
x = Dense(30, activation='tanh')(inputs)
x = Dense(30, activation='relu')(x)
x = Dense(30, activation='relu')(x)
predictions = Dense(len(Y_train.columns), activation='softmax')(x)

# This creates a model
model = Model(inputs=inputs, outputs=predictions)
model.summary()

model.compile(optimizer='Adam', loss='mse')
model.fit(X_train, Y_train, batch_size=1, epochs=300)

# Plotting the new model against ground truth
print("Loss:\t", model.evaluate(X_test, Y_test, verbose=0))


