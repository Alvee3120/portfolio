import { Award, FileText, Headphones } from 'lucide-react';

const StatusBar = () => {
  return (
    /* FULL WIDTH WHITE WRAPPER */
    <div className="w-full bg-white py-10 flex justify-center">

      {/* CENTERED 1280px ROUNDED BAR */}
      <div className="w-full max-w-7xl bg-white rounded-full 
        shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
        py-6 px-6 md:px-12 flex flex-col md:flex-row 
        items-center justify-between gap-10 border border-slate-100 -mt-24 z-100 relative">

        {/* ITEM 1 */}
        <div className="flex items-center gap-4">
          <div className="bg-[#F57C20] p-4 rounded-full text-white shadow-md">
            <Award size={32} />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-[#1E293B]">2 year working</h4>
            <p className="text-orange-400 font-medium">Experience</p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="flex items-center gap-4">
          <div className="bg-[#F57C20] p-4 rounded-full text-white shadow-md">
            <FileText size={32} />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-[#1E293B]">124+ projects</h4>
            <p className="text-orange-400 font-medium">Completed</p>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="flex items-center gap-4">
          <div className="bg-[#F57C20] p-4 rounded-full text-white shadow-md">
            <Headphones size={32} />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-[#1E293B]">Online 24/7</h4>
            <p className="text-orange-400 font-medium">Support</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatusBar;
