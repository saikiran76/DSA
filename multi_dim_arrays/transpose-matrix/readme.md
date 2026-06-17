### Complexity Analysis

The algorithm processes every matrix element exactly once and stores every element exactly once in the transposed matrix.

Therefore, if the matrix contains `R` rows and `C` columns:

| Metric           | Complexity |
| ---------------- | ---------- |
| Time Complexity  | `O(R × C)` |
| Space Complexity | `O(R × C)` |

### Why Not Simply `O(N²)`?

The answer depends on how `N` is defined.

#### Case 1: Square Matrix (`N × N`)

If the matrix is guaranteed to be square:

```text
N × N
```

Then:

```text
Time Complexity: O(N²)
Space Complexity: O(N²)
```

Since:

```text
R = N
C = N

R × C = N²
```

#### Case 2: Rectangular Matrix

Consider a matrix of size:

```text
1 × 1,000,000
```

Then:

```text
R × C = 1,000,000
```

However, if we incorrectly define:

```text
N = 1,000,000
```

and write:

```text
O(N²)
```

we would obtain:

```text
O(1,000,000²)
```

which significantly overestimates the actual work performed.

> [!IMPORTANT]
> For matrices that may be rectangular, the most precise complexity expression is `O(R × C)`. Using `O(N²)` is only accurate when the matrix is explicitly guaranteed to be `N × N`.

### Interview / LeetCode Convention

| Problem Statement       | Preferred Complexity |
| ----------------------- | -------------------- |
| Given an `m × n` matrix | `O(mn)`              |
| Given an `n × n` matrix | `O(N²)`              |

### Final Complexity

```text
Time Complexity : O(R × C)
Space Complexity: O(R × C)
```

The worst-case shape among all matrix dimensions happens to be a square matrix, which simplifies to `O(N²)`. However, the generally preferred and more precise analysis for this algorithm is:

```text
Time Complexity : O(R × C)
Space Complexity: O(R × C)
```
