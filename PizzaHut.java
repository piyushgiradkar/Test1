package Exam;
import  java.util.*;
 class Pizza {
	String pizzabase;
	int price;
	Pizza(String base, int p)
	{
		pizzabase = base;
		price = p;
	}
	void display()
	{
		System.out.println("PizzaBase = "+pizzabase+"\nPrice = "+price );
	}
	
}
class ChickenPizza extends Pizza
{
	String topping = "chicken";
	ChickenPizza(String base, int p)
	{
		super(base, p);
		
	}
	void display()
	{
		System.out.println("PizzaBase = "+pizzabase+"\nPrice = "+price +"\nTopping ="+topping);
	}
	
}
class MuttonPizza extends ChickenPizza
{
	String flavouredtopping  = "Mutton";
	MuttonPizza(String base, int p)
	{
		super(base, p);
		
	}
	void display()
	{
		System.out.println("PizzaBase = "+pizzabase+"\nPrice = "+price+"\nFlavoured Topping = "+flavouredtopping );
	}
}

public class PizzaHut {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		// TODO Auto-generated method stub
		Pizza p1 = new Pizza("Thin", 100);
		ChickenPizza c1 = new ChickenPizza("Thick", 200);
		MuttonPizza M1 = new MuttonPizza("flat", 300);
		
		System.out.print("Simple Pizza Price = "+ p1.price);
		System.out.print("Chicken Pizza Price = "+ c1.price);
		System.out.print("Mutton Pizza Price = "+ M1.price);
		System.out.print("Choose your pizza\nPress\n 1 ---> simple Pizza \n2 ---> Chicken Pizza\n3 ---> Mutton Pizza");
		int a = sc.nextInt();
		if(a== 1)
		{
			p1.display();
		}else if(a== 2)
		{
			c1.display();
			
		}
		else if(a== 3)
		{
			M1.display();
		}
		else
		{
			System.out.println("Enter valid number");
		}
	}

}

