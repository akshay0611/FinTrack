import { Overview } from '@/components/overview'; // Import the FinancialOverview component
import { SideNav } from '@/components/side-nav'; // Import the SideNav component
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (

      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-screen w-64">
          <SideNav />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 p-6">
          <Overview />
        </div>
      </div>

  );
}