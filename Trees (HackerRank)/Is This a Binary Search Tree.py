""" Node is defined as
class node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
"""

a=[]
def checkBST(root):
    if root:
        checkBST(root.left)
        a.append(root.data)
        checkBST(root.right)
    if sorted(set(a))==a:
        return True
    else:
        return False