# import matplotlib.pyplot as plt
# import matplotlib
# # matplotlib.use('WebAgg')
# matplotlib.use('svg') 
import plotly.express as px
import matplotlib.pyplot as plt
# from sklearn import datasets
from sklearn import datasets
iris = datasets.load_iris()

# Store iris.data
samples = iris.data

# Create x and y
x = samples[:, 0]
y = samples[:, 1]

# Plot x and y
fig = px.scatter(x, y)

# Show/save the plot
# plt.show()
# plt.savefig('iris_plot.svg')
fig.write_html("iris_plot.html", auto_open=True)