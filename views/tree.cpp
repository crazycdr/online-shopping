#include<iostream>
#include <list>
using namespace std;
struct Edge
{
    int src, dest, weight;
};
struct graph
{
	int V,E;
	 Edge *edge;
};
struct Graph* createGraph(int V, int E)
{
    struct Graph* graph = 
         (struct Graph*) malloc( sizeof(struct Graph) );
    graph->V = V;
    graph->E = E;
 
    graph->edge = 
       (struct Edge*) malloc( graph->E * sizeof( struct Edge ) );
 
    return graph;
} 

 
int  isReachable(int s, int d)
{
   if (s == d)
      return true;
 
   bool *visited = new bool[V];
    for (int i = 0; i < V; i++)
        visited[i] = false;
 
   list<int> queue;
 
   visited[s] = true;
    queue.push_back(s);
 
   list<int>::iterator i;
 
    while (!queue.empty())
    {
       s = queue.front();
        queue.pop_front();
 
       for (i = adj[s].begin(); i != adj[s].end(); ++i)
        {
           if (*i == d)
                return true;
 
           if (!visited[*i])
            {
                visited[*i] = true;
                queue.push_back(*i);
            }
        }
    }
     
   return false;
}
 
int main()
{
	int t;
	cin>>t;
	while(t--){
		int n;
		int e;
		cin>>n;
		struct Graph* graph = createGraph(V, E);
		e=n-1;
		int start,end,wgt;
		for (int i = 0; i < e; ++i)
		{
			cin>>start>>end>>wgt;
			  graph->edge[0].src = start;
   			 graph->edge[0].dest = end;
    		graph->edge[0].weight = wgt;		
		}	

	}
   
   	int m;
   	cin>>m;
   	int u,v,k;
   	while(m--){
   		cin>>u>>v>>k;	
   	}
 	
    
   // isReachable(graph, u,v,k);
   
    
}