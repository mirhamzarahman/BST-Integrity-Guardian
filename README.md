# 🌳 BST Integrity Guardian

A smart hierarchical data recovery utility that detects and repairs corrupted Binary Search Tree (BST) records without changing the original structure.

---

## 📌 Project Overview

In many software systems, hierarchical data is stored using tree structures. A small data corruption issue, such as two incorrectly swapped values, can break the entire ordering system.

**BST Integrity Guardian** acts as a recovery engine that identifies misplaced values inside a Binary Search Tree and restores the correct ordering while preserving the original tree architecture.

---

## 🌎 Real-World Conceptual Scenario

Imagine a company storing its:

* 📂 File indexing system
* 🏢 Organization hierarchy
* 📊 Database indexing structure
* 🔎 Search optimization tree

using a Binary Search Tree.

Due to a synchronization error, two records are accidentally exchanged. The system still has the correct structure, but searches become unreliable.

BST Integrity Guardian analyzes the hierarchy, detects the corrupted nodes, and restores data integrity automatically.

---

## 🧠 Core Concept

The project is based on the property of a Binary Search Tree:

```
Left Subtree < Node Value < Right Subtree
```

A valid BST always produces sorted values during an inorder traversal.

Example:

```
      3
     / \
    1   4
       /
      2
```

Inorder traversal:

```
1 → 3 → 2 → 4
```

The order is incorrect because two values are misplaced.

The recovery system identifies the incorrect values:

```
3 and 2
```

and swaps them back.

---

## ⚙️ How The System Works

1. Traverse the tree using inorder traversal.
2. Compare each node with the previously visited node.
3. Detect positions where the sorted order breaks.
4. Store the corrupted nodes.
5. Swap their values.
6. Return the repaired BST.

---

## 🧩 Algorithm / Data Structure Used

| Concept            | Usage                    |
| ------------------ | ------------------------ |
| Binary Search Tree | Stores hierarchical data |
| Depth First Search | Traverses all nodes      |
| Inorder Traversal  | Validates BST ordering   |
| Recursion          | Handles tree exploration |
| Anomaly Detection  | Finds incorrect values   |

---

## 🔍 Step-by-Step Logic

### Step 1: Traverse Left

Visit smaller values first.

```
Left → Root → Right
```

### Step 2: Validate Ordering

Compare:

```
previous node value > current node value
```

If true, the BST order is broken.

### Step 3: Track Errors

The first incorrect node becomes the first corrupted record.

The current incorrect node becomes the second corrupted record.

### Step 4: Repair Data

Swap the two corrupted values.

---

## ✨ Key Features

* ✅ Automatic BST corruption detection
* ✅ Repairs data without modifying tree structure
* ✅ Uses memory-efficient traversal logic
* ✅ Clean recursive implementation
* ✅ Demonstrates real-world data recovery concepts

---

## 💡 Example Use Case

### Input Tree

```text
        3
       / \
      1   4
         /
        2
```

### Corrupted Inorder Data

```text
1, 3, 2, 4
```

### Repaired Tree

```text
        2
       / \
      1   4
         /
        3
```

### Result

```text
BST Integrity Restored Successfully
```

---

## 📊 Complexity Analysis

| Metric           | Complexity |
| ---------------- | ---------- |
| Time Complexity  | O(n)       |
| Space Complexity | O(h)       |

Where:

* `n` = number of nodes
* `h` = height of the tree

The algorithm visits every node once and only uses recursion stack space.

---

## 🛠 Technologies Used

* JavaScript (ES6+)
* Binary Search Tree Data Structure
* Recursive Algorithms
* Depth First Search

---

## 📁 Project Structure

```
bst-integrity-guardian/
│
├── src/
│   ├── TreeNode.js
│   └── bstIntegrityGuardian.js
│
├── examples/
│   └── example.js
│
├── README.md
└── package.json
```

---

## 🚀 How To Run

### Clone Repository

```bash
git clone https://github.com/mirhamzarahman/bst-integrity-guardian.git
```

### Navigate Into Project

```bash
cd bst-integrity-guardian
```

### Run Example

```bash
node examples/example.js
```

---

## 📚 Learning Outcomes

Through this project, you can understand:

* How Binary Search Trees maintain sorted data
* How recursive tree traversal works
* How corrupted data can be detected algorithmically
* How anomaly detection can improve data reliability
* How theoretical algorithms can solve practical problems

---

## 🔮 Future Improvements

Possible enhancements:

* Add a visual BST debugging interface
* Support large-scale tree validation
* Create automated corruption reports
* Add JSON database import/export
* Implement iterative traversal mode
* Build a web dashboard for monitoring tree health

---

## 📜 License

This project is licensed under the MIT License.

Feel free to use, modify, and improve it for learning and development purposes.
