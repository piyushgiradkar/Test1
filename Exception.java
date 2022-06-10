package Exam;

public class Exception {
	class VehicleException extends Exception {
		
		public VehicleException(String s)
		{
			super(s);
		}
	}
	class UnsaftyException extends Exception {
		
		public UnsaftyException(String s)
		{
			super(s);
		}
	}
	class Fourwheeler
	{
		String name;
		int cc;
		int safety;
		int price;
		Fourwheeler(String n, int c, int s, int p)
		{
			name = n;
			cc = c;
			safety = s;
			price = p;
			
			
		}
		void validate()
		{
			if(this.cc<1000|| this.cc>4000)
			{
				try
				{
					throw new  VehicleException("It is a Two Wheeler, not Four Wheeler");
				}
				catch(VehicleException s)
				{
					System.out.print(s.getMessage()+"\n\n");
				}
				
				
			}
			if(this.safety != 5)
			{
				try
				{
					throw new  UnsaftyException("Sorry, Invalid safty feaature");
				}
				catch(UnsaftyException s)
				{
					System.out.print(s.getMessage()+"\n\n");
				}
			}
		}
	}

	public class Factory {

		public static void main(String[] args) {
			
			Fourwheeler obj1 =new Fourwheeler("nexon", 900,5,500000);
			Fourwheeler obj2 =new Fourwheeler("Altroz",5000,4,1000000);
			Fourwheeler obj3 =new Fourwheeler("nexon", 5000,5,500000);
			Fourwheeler obj4 =new Fourwheeler("Punch", 1100,4,500000);
			// TODO Auto-generated method stub
			 obj1.validate();
			 obj2.validate();
			 obj3.validate();
			 obj4.validate();
			
			
		}

	}
}
