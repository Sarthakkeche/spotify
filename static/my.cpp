#include<iostream.h>

using namespace std;
template<class T>
T min(T a,T b){
    return(a>b)?a:b;
}
void main(){
    int i=10,j=20;
        cout<<endl<<min(i,j);
        float a=3.14,b=6.28;
        cout<<endl<<min(a,b);
        
}

    
