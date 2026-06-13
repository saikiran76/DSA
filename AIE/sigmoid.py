import numpy as np
from numpy.typing import NDArray


class Solution:
    
    def sigmoid(self, z: NDArray[np.float64]) -> NDArray[np.float64]:
        # z is a 1D NumPy array
        # Formula: 1 / (1 + e^(-z))
        return np.round(1/(1+np.exp(-z)), 5)
        # pass

    def relu(self, z: NDArray[np.float64]) -> NDArray[np.float64]:
        # z is a 1D NumPy array
        # Formula: max(0, z) element-wise
        # z = np.array(z)
        return np.maximum(0, z)
        # for val in z:
        #     if val < 0:
        #         return 0
        #     else:
        #         return val
