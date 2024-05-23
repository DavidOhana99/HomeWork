using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace homework
{
    internal class HW_51
    {
        static void Main(string[] args)
        {
            shirt();
        }

        static void shirt()
        {
            string[] colors = { "red", "green", "blue" };
            string[] patterns = { "striped", "checked", "plain" };


            


            for (int i = 0; i < colors.Length; i++)
            {

                for (int j = 0; j < patterns.Length; j++)
                {

                    Console.WriteLine(colors[i] + " : " + patterns[j]);
                }
            }

        }

       
    }
}
