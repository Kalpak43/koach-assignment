export default function Footer() {
  return (
    <footer className="bg-white py-8 text-center border-t border-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Nucleus Accelerator. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
