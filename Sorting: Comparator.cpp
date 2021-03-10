#include<cmath>
#include<cstdio>
#include<vector>
#include<iostream>
#include<algorithm>
using namespace std;

struct Player {
    int score;
    string name;
};

class Checker{
public:
  	// complete this method
    static int comparator(Player a, Player b)  {
        if(a.score < b.score) {
            return -1;
        } 
    
        if(a.score > b.score) {
            return 1;
        }
        
        if(a.score == b.score) {
            int count = 0;
            
            if(a.name[count] < b.name[count]) {
                return 1;
            }
            
            if(a.name[count] > b.name[count]) {
                return -1;
            }
            
            
            while(a.name[count] == b.name[count]) {
                count ++;
                if(a.name[count] < b.name[count]) {
                    return 1;
                }
                
                if(a.name[count] > b.name[count]) {
                    return -1;
                }
                
            }
            return 0;
        } 
        
        return 0;
    }
};

